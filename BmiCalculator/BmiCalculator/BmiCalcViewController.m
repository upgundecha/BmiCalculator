//
//  BmiCalcViewController.m
//  BmiCalculator
//
//  Created by Unmesh Gundecha on 29/05/13.
//  Copyright (c) 2013 Unmesh Gundecha. All rights reserved.
//

#import "BmiCalcViewController.h"

@interface BmiCalcViewController ()

@end

@implementation BmiCalcViewController

- (IBAction) calculate {
    
    [self.view endEditing:YES];
    
    NSString *heightCms = height.text;
    NSString *weightKg = weight.text;
    
    float h;
    float w;
    float output;
    
    h = (float) [heightCms floatValue] * 0.01;
    w = [weightKg floatValue];
    
    //bmiInt = weightInt/(lengthInt*lengthInt);
    output = w/(h*h);
    
    bmi.text = [NSString stringWithFormat:@"%.2f",output];
    
    
    if (output < 18.5) {
        category.text = @"Underweight";
    }
    else if (output < 25.0) {
        category.text = @"Normal";
    }
    else if (output < 30.0) {
        category.text = @"Overweight";
    }
    else {
        category.text = @"Obese";
    }
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
