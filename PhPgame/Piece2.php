<?php


    class Piece2 implements Piece{

        private $color;

        public function coconstruct($color){

            $this->setColor($color);

        }

        public function getColor(){

            return $this->color;

        }

        public function setColor($color){

            if($color != self::COLOUR_BLUE && $color != self::COLOUR_RED){

                throw new \InvalidArgumentException('You must choose between ' . self::COLOUR_BLUE . 'or' . self::COLOUR_RED);
                
            }

            $this->color=$color;

        }


    }
?>
