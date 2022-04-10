<?php

namespace App\Src\Foundation\Inertia;

use Inertia\Inertia;

trait DelegatesRender
{
    protected $data;

    protected function setFallbackData(array $data = [])
    {
        $this->data = $data;

        return $this;
    }

    protected function setFallbackPage($page): object
    {
        if( ! isset($this->pageDirectory)) {
           return throw new \Exception('You must set the $pageDirectory property at ' . __CLASS__ . ' to determine page directory.');
        }

        $this->view = "{$this->pageDirectory}/$page";

        return $this;
    }

    public function render()
    {
        return Inertia::render($this->view, $this->data ?? []);
    }
}
