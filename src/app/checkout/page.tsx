'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { OrderConfirmation } from '@/components/OrderConfirmation';

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'e-money',
    eMoneyNumber: '',
    eMoneyPin: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const vat = Math.round(subtotal * 0.2);
  const grandTotal = subtotal + shipping + vat;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP Code is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    
    if (formData.paymentMethod === 'e-money') {
      if (!formData.eMoneyNumber.trim()) newErrors.eMoneyNumber = 'e-Money Number is required';
      if (!formData.eMoneyPin.trim()) newErrors.eMoneyPin = 'e-Money PIN is required';
    }

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (state.items.length === 0) {
      router.push('/');
      return;
    }

    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Link href="/">
            <Button className="bg-[#D87D4A] uppercase text-sm text-white px-8 py-3 cursor-pointer hover:bg-[#c16d39] transition-colors  font-bold tracking-wider">
              CONTINUE & PAY
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ChevronLeft size={20} className="mr-2" />
            Go Back
          </Link>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 lg:p-8">
              <h1 className="text-3xl font-medium text-black mb-8 uppercase">Checkout</h1>
              
              <form onSubmit={handleSubmit} className="space-y-8">

                <div>
                  <h2 className="text-md font-semibold text-[#D87D4A] mb-4 uppercase tracking-wider">
                    Billing Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className = 'text-black'>Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={errors.name ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500' }
                        placeholder="Alexei Ward"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className = 'text-black'>Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={errors.email ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                        placeholder="alexei@mail.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className = 'text-black'>Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={errors.phone ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                        placeholder="+1 202-555-0136"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-orange-500 mb-4 uppercase tracking-wider">
                    Shipping Info
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address" className = 'text-black'>Your Address</Label>
                      <Input
                        id="address"
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className={errors.address ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                        placeholder="1137 Williams Avenue"
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="zipCode" className = 'text-black'>ZIP Code</Label>
                        <Input
                          id="zipCode"
                          type="text"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className={errors.zipCode ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                          placeholder="10001"
                        />
                        {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="city" className = 'text-black'>City</Label>
                        <Input
                          id="city"
                          type="text"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className={errors.city ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                          placeholder="New York"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>
                      
                      <div>
                        <Label htmlFor="country" className = 'text-black'>Country</Label>
                        <Input
                          id="country"
                          type="text"
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className={errors.country ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                          placeholder="United States"
                        />
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                      </div>
                    </div>
                  </div>
                </div>


                <div>
                  <h2 className="text-lg font-semibold text-orange-500 mb-4 uppercase tracking-wider">
                    Payment Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-black">Payment Method</Label>
                      <div className="space-y-3 mt-2">
                        <label className="flex items-center space-x-3 p-3 border rounded cursor-pointer hover:border-orange-500 transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="e-money"
                            checked={formData.paymentMethod === 'e-money'}
                            onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                            className="text-orange-500"
                          />
                          <span className="text-sm font-medium">e-Money</span>
                        </label>
                        
                        <label className="flex items-center space-x-3 p-3 border rounded cursor-pointer hover:border-orange-500 transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            checked={formData.paymentMethod === 'cash'}
                            onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                            className="text-orange-500"
                          />
                          <span className="text-sm font-medium">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>

                    {formData.paymentMethod === 'e-money' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="eMoneyNumber" className = 'text-black'>e-Money Number</Label>
                          <Input
                            id="eMoneyNumber"
                            type="text"
                            value={formData.eMoneyNumber}
                            onChange={(e) => handleInputChange('eMoneyNumber', e.target.value)}
                            className={errors.eMoneyNumber ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                            placeholder="238521993"
                          />
                          {errors.eMoneyNumber && <p className="text-red-500 text-sm mt-1">{errors.eMoneyNumber}</p>}
                        </div>
                        
                        <div>
                          <Label htmlFor="eMoneyPin" className = 'text-black'>e-Money PIN</Label>
                          <Input
                            id="eMoneyPin"
                            type="text"
                            value={formData.eMoneyPin}
                            onChange={(e) => handleInputChange('eMoneyPin', e.target.value)}
                            className={errors.eMoneyPin ? 'border-red-500' : 'bg-white py-6 placeholder-gray-500'}
                            placeholder="6891"
                          />
                          {errors.eMoneyPin && <p className="text-red-500 text-sm mt-1">{errors.eMoneyPin}</p>}
                        </div>
                      </div>
                    )}

                    {formData.paymentMethod === 'cash' && (
                      <div className="p-4 bg-gray-50 rounded text-sm text-gray-600">
                        The Cash on Delivery option enables you to pay in cash when our delivery courier 
                        arrives at your residence. Just make sure your address is correct so that your 
                        order will not be cancelled.
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 lg:p-8">
              <h2 className="text-2xl font-semibold mb-6 uppercase text-gray-950">Summary</h2>
              
              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16 bg-gray-800 rounded overflow-hidden">
                      <Image
                        src={'/image-hero.jpeg'}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium text-md text-black">{item.shortName}</h3>
                      <p className="text-sm text-gray-600">${item.price.toLocaleString()}</p>
                    </div>

                    <div className="flex items-center space-x-3 text-black bg-gray-100 rounded px-3 py-2">
                      <button
                        onClick={() => dispatch({ 
                          type: 'UPDATE_QUANTITY', 
                          payload: { id: item.id, quantity: item.quantity - 1 }
                        })}
                        className="text-gray-900 hover:text-orange-500 transition-colors"
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

              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 uppercase">Total</span>
                  <span className="font-semibold">${subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 uppercase">Shipping</span>
                  <span className="font-semibold">${shipping}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 uppercase">VAT (Included)</span>
                  <span className="font-semibold">${vat.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between pt-3 border-t">
                  <span className="text-sm text-gray-600 uppercase">Grand Total</span>
                  <span className="font-bold text-orange-500">${grandTotal.toLocaleString()}</span>
                </div>
              </div>
              
              <Button 
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                CHECKOUT 
              </Button>
            </div>
          </div>
        </div>
      </div>
      <OrderConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        orderData={{
          total: subtotal,
          shipping,
          vat,
          grandTotal,
        }}
      />
    </div>
  );
}