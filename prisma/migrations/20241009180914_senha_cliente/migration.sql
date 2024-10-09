-- CreateTable
CREATE TABLE "Produto" (
    "_id" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_inscricao_cl" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "_id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "_id" TEXT NOT NULL,
    "data_pedido" TIMESTAMP(3) NOT NULL,
    "preco_pedido" DOUBLE PRECISION NOT NULL,
    "desconto" DOUBLE PRECISION NOT NULL,
    "preco_final" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "FormaPagamento" (
    "_id" TEXT NOT NULL,
    "descricao_pag" TEXT NOT NULL,

    CONSTRAINT "FormaPagamento_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "_id" TEXT NOT NULL,
    "descricao_cat" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
