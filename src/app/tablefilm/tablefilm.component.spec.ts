import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablefilmComponent } from './tablefilm.component';

describe('TablefilmComponent', () => {
  let component: TablefilmComponent;
  let fixture: ComponentFixture<TablefilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablefilmComponent]
    });
    fixture = TestBed.createComponent(TablefilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
