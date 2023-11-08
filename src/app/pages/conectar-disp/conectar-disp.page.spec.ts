import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConectarDISPPage } from './conectar-disp.page';

describe('ConectarDISPPage', () => {
  let component: ConectarDISPPage;
  let fixture: ComponentFixture<ConectarDISPPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConectarDISPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
