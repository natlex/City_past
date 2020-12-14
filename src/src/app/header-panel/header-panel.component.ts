import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPanelComponent {}
