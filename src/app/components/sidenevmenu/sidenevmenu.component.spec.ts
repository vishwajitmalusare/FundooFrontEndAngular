import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenevmenuComponent } from './sidenevmenu.component';

describe('SidenevmenuComponent', () => {
  let component: SidenevmenuComponent;
  let fixture: ComponentFixture<SidenevmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenevmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenevmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
