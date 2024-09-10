import { Test, TestingModule } from '@nestjs/testing';
import { FormaPagamentoController } from './forma-pagamento.controller';

describe('FormaPagamentoController', () => {
  let controller: FormaPagamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormaPagamentoController],
    }).compile();

    controller = module.get<FormaPagamentoController>(FormaPagamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
