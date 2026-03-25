<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required|string|min:10|max:5000',
            'email'   => 'nullable|email|max:255',
            'service' => 'nullable|string|max:100',
        ]);

        if ($validator->fails()) {
            return response()->json(['ok' => false, 'error' => $validator->errors()->first()], 422);
        }

        $data = $request->only(['firstName', 'lastName', 'email', 'company', 'service', 'message']);

        $body = "New contact form submission from linkhipu.be\n\n";
        if (!empty($data['firstName']) || !empty($data['lastName'])) {
            $body .= "Name:    " . trim(($data['firstName'] ?? '') . ' ' . ($data['lastName'] ?? '')) . "\n";
        }
        if (!empty($data['email']))   $body .= "Email:   {$data['email']}\n";
        if (!empty($data['company'])) $body .= "Company: {$data['company']}\n";
        if (!empty($data['service'])) $body .= "Service: {$data['service']}\n";
        $body .= "\nMessage:\n{$data['message']}\n";

        $recipient = config('mail.from.address', 'office@linkhipu.be');

        Mail::raw($body, function ($mail) use ($recipient, $data) {
            $mail->to($recipient)
                 ->subject('New Contact Form – LINKHIPU')
                 ->replyTo($data['email'] ?? $recipient, trim(($data['firstName'] ?? '') . ' ' . ($data['lastName'] ?? '')) ?: 'Visitor');
        });

        return response()->json(['ok' => true]);
    }
}
