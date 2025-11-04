'use client';

import { useCart } from '@/contexts/CartContext';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    total: number;
    shipping: number;
    vat: number;
    grandTotal: number;
  };
}

export const OrderConfirmation = ({ isOpen, onClose, orderData }: OrderConfirmationProps) => {
  const { state, dispatch } = useCart();
  const router = useRouter();

  const handleBackToHome = () => {
    dispatch({ type: 'CLEAR_CART' });
    onClose();
    router.push('/');
  };

  if (!isOpen) return null;

  const mainItem = state.items[0];
  const otherItemsCount = state.items.length - 1;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-8">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="text-orange-500 w-16 h-16" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-black mb-4">
            Thank you for your order
          </h2>
          
          <p className="text-gray-600 mb-8">
            You will receive an email confirmation shortly.
          </p>

          {/* Order Summary */}
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
            {/* Items */}
            <div className="p-6 border-b border-gray-200">
              {mainItem && (
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-12 h-12 bg-white rounded overflow-hidden">
                    <Image
                      src={mainItem.cartImage}
                      alt={mainItem.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{mainItem.shortName}</h3>
                    <p className="text-sm text-gray-600">${mainItem.price.toLocaleString()}</p>
                  </div>

                  <span className="text-sm text-gray-600">x{mainItem.quantity}</span>
                </div>
              )}

              {otherItemsCount > 0 && (
                <div className="text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
                  and {otherItemsCount} other item{otherItemsCount > 1 ? 's' : ''}
                </div>
              )}
            </div>

            {/* Total */}
            <div className="p-6 bg-black text-white">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300 uppercase">Grand Total</span>
                  <span className="font-semibold">${orderData.grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Home Button */}
          <Button 
            onClick={handleBackToHome}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};