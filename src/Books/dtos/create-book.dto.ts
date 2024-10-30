//dto হলো validation এর জন্য ব্যবহার করা হয়।
import { IsString } from 'class-validator'; // library install করে validation করা যায় এটা class-validator বলে।

export class CreateBookDto {
  // IsString decorator এর পরে property এর type গুলো বলে দিতে হবে। validation এর জন্য। validation true হলে data response করবে অন্যথায় করবে না।
  @IsString()
  name: string;
}
