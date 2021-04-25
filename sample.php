<?php

class Sample
{
    const FIZZ_MESSAGE = "Fizz";
    const BUZZ_MESSAGE = "Buzz";

    public static function FizzBuzz()
    {
        for ($i=0;$i<100;$i++) {

            $isFizz = $i%3 == 0;
            $isBuzz = $i%5 == 0;

            if ($isFizz && $isBuzz) echo self::FIZZ_MESSAGE . self::BUZZ_MESSAGE;
            else if ($isFizz)       echo self::FIZZ_MESSAGE;
            else if ($isBuzz)       echo self::BUZZ_MESSAGE;
            else                    echo $i;
        }
    }
}