// NG2
import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
// APP
import { MeowComponent } from './meow.component';

describe('Component: Meow', () => {
    let fixture: ComponentFixture<MeowComponent>;
    let context: any;
    let element: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MeowComponent]
        });
        fixture = TestBed.createComponent(MeowComponent);
        context = fixture.debugElement.componentInstance;

        element = fixture.nativeElement;
        fixture.detectChanges();
    });

    it('should work', () => {
        expect(context).toBeDefined();
        expect(element).toBeDefined();
    });
});
