<?php


    interface Piece{

        const COLOUR_BLUE = 'blue';
        const COLOUR_RED  = 'red';

        public function getColor();

        public function setColor($color);

    }



?>