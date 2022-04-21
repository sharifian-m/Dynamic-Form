
export class defaultFields {
    // value: string | undefined;
    name: string;
    label: string;
    required: boolean;
    // order: number;
    controlType: string;
    // type: string;
    // validator: string;
    description: string;

  
    constructor(
        // value?: string,
        name?: string,
        label?: string,
        required?: boolean,
        // order?: number,
        controlType?: string,
        // type?: string,
        // validator?: string,
        description?: string,
        // options?: {key: string, value: string}[],
     ) {
  
    //   this.value = value;
      this.name = name || '';
      this.label = label || '';
      this.required = !!required;
    //   this.order = order === undefined ? 1 : order;
      this.controlType = controlType || '';
    //   this.validator = validator || "";
      // this.type = type || '';
      this.description = description  || '';
   
    }
  }
  