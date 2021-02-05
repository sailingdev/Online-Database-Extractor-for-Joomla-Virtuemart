<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ValidPrefix implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return count(explode("/\_/", $value)) == 1 && preg_match('/^[a-z0-9]+[_]+$/i', $value);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The table prefix field format invalid.';
    }
}
