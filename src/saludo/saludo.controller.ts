import { Controller, Get } from '@nestjs/common';
import { SaludoService } from './saludo.service';

@Controller('saludo')
export class SaludoController {
    constructor(private saludoService: SaludoService) {}
    
    @Get() 
    saludar (): string {    
        return this.saludoService.saludar();
    }
        
}
