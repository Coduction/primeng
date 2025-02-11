import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '@coduction/primeng/dropdown';
import { InputTextModule } from '@coduction/primeng/inputtext';
import { InputMaskModule } from '@coduction/primeng/inputmask';
import { CheckboxModule } from '@coduction/primeng/checkbox';
import { StepsModule } from '@coduction/primeng/steps';
import { ToastModule } from '@coduction/primeng/toast';
import { CardModule } from '@coduction/primeng/card';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { BasicDoc } from './basicdoc';
import { ConfirmationDemo } from './confirmationdemo';
import { ImportDoc } from './importdoc';
import { InteractiveDoc } from './interactivedoc';
import { PaymentDemo } from './paymentdemo';
import { PersonalDemo } from './personaldemo';
import { RoutingDoc } from './routingdoc';
import { SeatDemo } from './seatdemo';
import { StyleDoc } from './styledoc';
import { TicketService } from '../../service/ticketservice';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, StepsModule, ToastModule, AppDocModule, FormsModule, DropdownModule, InputTextModule, InputMaskModule, CheckboxModule, CardModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, InteractiveDoc, ConfirmationDemo, PaymentDemo, PersonalDemo, SeatDemo, RoutingDoc, AccessibilityDoc],
    exports: [AppDocModule],
    providers: [TicketService]
})
export class StepsDocModule {}
