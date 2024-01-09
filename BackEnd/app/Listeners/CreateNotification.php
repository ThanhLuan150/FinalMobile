<?php

namespace App\Listeners;

use App\Events\OrderCreated;
use App\Models\Notifications;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class CreateNotification
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(OrderCreated $event)
{   
    $order = $event->order; // Truy cập trực tiếp đối tượng Order từ sự kiện
    $notification = new Notifications;
    $notification->id_user = $order->id_user;
    $notification->id_order = $order->id; // Thay vì $order->id_order
    $notification->content = "Đơn hàng đã được tạo thành công.";
    $notification->save();
}

}
