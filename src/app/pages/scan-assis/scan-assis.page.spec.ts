import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanAssisPage } from './scan-assis.page';

describe('ScanAssisPage', () => {
  let component: ScanAssisPage;
  let fixture: ComponentFixture<ScanAssisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ScanAssisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
