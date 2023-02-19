import { Module } from '@nestjs/common';
import { SaludoModule } from './saludo/saludo.module';

@Module({
  imports: [SaludoModule],
})
export class AppModule {}
