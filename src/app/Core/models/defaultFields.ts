export class defaultFields {
  id:number;
  name: string;
  title: string;
  required: boolean;
  controlType: string;
  description: string;

  constructor(
    id:number,
    name?: string,
    title?: string,
    required?: boolean,
    controlType?: string,
    description?: string
  ) {
    this.id=id;
    this.name = name || '';
    this.title = title || '';
    this.required = !!required;
    this.controlType = controlType || '';
    this.description = description || '';
  }
}
