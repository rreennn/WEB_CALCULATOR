<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AllController extends Controller
{
    public function index() {
        return Inertia::render('Index');
    }

    public function math_calc() {
        return Inertia::render('MathCalculator');
    }

    public function bmi_calc() {
        return Inertia::render('BMICalculator');
    }

    public function age_calc() {
        return Inertia::render('AgeCalculator');
    }
}
