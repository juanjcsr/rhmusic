/*
 * Track represents a backend Track model  
 */
export class Track {
    constructor(
    public id: number,
    public name: string,
    public created_at?: string,
    public updated_at?: string,
  ) { }
}