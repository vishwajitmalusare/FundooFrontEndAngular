import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftonoteComponent } from './pdftonote.component';

describe('PdftonoteComponent', () => {
  let component: PdftonoteComponent;
  let fixture: ComponentFixture<PdftonoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdftonoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdftonoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
