import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface Option {
    id: number | string;
    text: string;
    active: boolean;
}

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ]
})
export class SelectComponent implements ControlValueAccessor {
    @Input() placeHolder = '';
    @Input() showDefaultValue = true;
    @Input() data: Option[] = [];
    @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

    isDisabled: boolean;
    currentValue: Option;
    _defaultValue = {
        id: '',
        text: 'Todos',
        active: true
    };

    constructor() {
    }

    onChange = (_: any) => {
    };
    onTouch = () => {
    };

    change(value: any): void {
        this.onChange(value);
        this.selectionChange.emit(value);
    }

    writeValue(obj: Option): void {
        if (!obj) {
            return;
        }
        this.currentValue = obj;
        this.selectionChange.emit(obj);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }
}
