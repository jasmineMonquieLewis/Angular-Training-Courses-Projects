import { Directive, OnInit, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  selector: '[modalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  public el: HTMLElement;

  constructor(@Inject(ElementRef) public ref: ElementRef, @Inject(JQ_TOKEN) public $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({});
    });
  }
}
