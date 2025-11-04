'use client';

import { useCart } from '@/contexts/CartContext';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export const CartDrawer = () => {
  const { state, dispatch } = useCart();
  const router = useRouter();

  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    dispatch({ type: 'CLOSE_CART' });
    router.push('/checkout');
  };

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => dispatch({ type: 'CLOSE_CART' })}
      />
      
      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform translate-x-0 transition-transform duration-300 ease-in-out shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold">
              Cart ({state.items.reduce((sum, item) => sum + item.quantity, 0)})
            </h2>
            <button
              onClick={() => dispatch({ type: 'CLOSE_CART' })}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Remove All Button */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => dispatch({ type: 'CLEAR_CART' })}
                    className="text-sm text-gray-500 hover:text-gray-700 underline"
                  >
                    Remove all
                  </button>
                </div>

                {/* Cart Items */}
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden">
                      <Image
                        src={item.cartImage}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.shortName}</h3>
                      <p className="text-sm text-gray-600">${item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center space-x-3 bg-gray-100 rounded px-3 py-2">
                      <button
                        onClick={() => dispatch({ 
                          type: 'UPDATE_QUANTITY', 
                          payload: { id: item.id, quantity: item.quantity - 1 }
                        })}
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      
                      <span className="text-sm font-medium w-4 text-center">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => dispatch({ 
                          type: 'UPDATE_QUANTITY', 
                          payload: { id: item.id, quantity: item.quantity + 1 }
                        })}
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 uppercase">Total</span>
                <span className="text-lg font-semibold">${subtotal.toLocaleString()}</span>
              </div>
              
              <Button 
                onClick={handleCheckout}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};