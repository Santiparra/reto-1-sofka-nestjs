import { Injectable } from '@nestjs/common';

@Injectable()
export class SaludoService {
    saludar(): string {
        return "Este es mi primera aplicación en Nest"
    }
}
