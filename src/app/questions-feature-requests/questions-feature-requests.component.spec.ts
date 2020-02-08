import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsFeatureRequestsComponent } from './questions-feature-requests.component';

describe('QuestionsFeatureRequestsComponent', () => {
  let component: QuestionsFeatureRequestsComponent;
  let fixture: ComponentFixture<QuestionsFeatureRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsFeatureRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsFeatureRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
