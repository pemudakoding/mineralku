<?php

namespace App\Http\Requests\Customer\Order;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'depot_id' => 'required|exists:depots,id',
            'name' => 'required|string|max:255',
            'whatsapp_numbers' => 'required|numeric|digits_between:10,16',
            'address' => 'required|string|max:255',
            'quantity' => 'required|integer|min:1',
            'shipping_detail' => 'required|in:pickup,delivery',
            'is_delivery_now' => 'required|boolean',
            'delivery_time' => 'exclude_if:is_delivery_now,true|date_format:H:i',
            'delivery_date' => 'exclude_if:is_delivery_now,true|date',
        ];
    }
}
