import { FormGroup } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface inputoption {
  required: boolean;
  type: string;
  formgroup?: FormGroup;
  minlength: number;
  formcontrolname: string;
}

