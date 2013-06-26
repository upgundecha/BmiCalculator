//
//  BmiCalcViewController.h
//  BmiCalculator
//
//  Created by Unmesh Gundecha on 29/05/13.
//  Copyright (c) 2013 Unmesh Gundecha. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BmiCalcViewController : UIViewController {
    IBOutlet UITextField *height;
    IBOutlet UITextField *weight;
    IBOutlet UITextField *bmi;
    IBOutlet UITextField *category;
}

- (IBAction) calculate;

@end
