import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOfAzhagiComponent } from './best-of-azhagi.component';

describe('BestOfAzhagiComponent', () => {
  let component: BestOfAzhagiComponent;
  let fixture: ComponentFixture<BestOfAzhagiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestOfAzhagiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestOfAzhagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
