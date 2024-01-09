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
    $notification = new Notifications;
    $notification->id_user = $event->order->id_user;
    $notification->id_order = $event-> order->id_order; // Giả sử bạn đã truyền giá trị id_order vào sự kiện
    $notification->content = "Đơn hàng đã được tạo thành công.";
    $notification->save();
}
}
