import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/carrinho-de-compras.png";
import {
  Overlay,
  CartContainer,
  Sidebar,
  Total,
  DivTotal,
  Button,
  Item,
  Itens,
  Imagem,
  Remover,
  Entrega,
  Botoes,
  OverlayCarrinho,
} from "./styles";
import { RootReducer } from "../../store";
import { close, remove, clear } from "../../store/reducers/cart";
import { getPreco } from "../ItemCard";
import Lixeira from "../../assets/lixeira.svg";
import { useState } from "react";
import Input from "../Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePurchaseMutation } from "../../services/api";

export type FormValues = {
  fullName: string;
  address: string;
  city: string;
  cep: string;
  number: string;
  complement: string;
  cardName: string;
  cardNumber: string;
  cardCode: string;
  expiresMonth: string;
  expiresYear: string;
};

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const [carrinhoEstado, setCarrinhoEstado] = useState("pedido");
  const [purchase, { isSuccess, data }] = usePurchaseMutation();
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
    setCarrinhoEstado("pedido");
  };

  const getTotalPrice = () => {
    return items.reduce((acc, atual) => {
      return (acc += atual.preco);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const compraConluida = () => {
    setCarrinhoEstado("pedido");
    dispatch(clear());
    dispatch(close())
  }

  const form = useFormik<FormValues>({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      cep: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("O campo é obrigatório"),
      address: Yup.string().required("O campo é obrigatório"),
      city: Yup.string().required("O campo é obrigatório"),
      cep: Yup.string()
        .min(9, "CEP inválido")
        .max(9, "CEP inválido")
        .required("O campo é obrigatório"),
      number: Yup.string().required("O campo é obrigatório"),
      complement: Yup.string(),
      cardName: Yup.string().required("O campo é obrigatório"),
      cardNumber: Yup.string()
        .min(16, "Valor inválido")
        .max(16, "Valor inválido")
        .required("O campo é obrigatório"),
      cardCode: Yup.string()
        .min(3, "Valor inválido")
        .max(3, "Valor inválido")
        .required("O campo é obrigatório"),
      expiresMonth: Yup.string()
        .min(2, "Valor inválido")
        .max(2, "Valor inválido")
        .required("O campo é obrigatório"),
      expiresYear: Yup.string()
        .min(4, "Valor inválido")
        .max(4, "Valor inválido")
        .required("O campo é obrigatório"),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco,
        })),
        delivery: {
          receiver: values.fullName,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: +values.number,
            complement: values.complement,
          },
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: +values.cardCode,
            expires: {
              month: +values.expiresMonth,
              year: +values.expiresYear,
            },
          },
        },
      });
    },
  });
  
  return (
    <CartContainer
      onSubmit={(e) => {
        e.preventDefault(); // Previne o comportamento padrão
        form.handleSubmit(); // Chama o método do Formik
      }}
      className={isOpen ? "is-open" : ""}
    >
      <Overlay onClick={closeCart} />
      <Sidebar>
        {carrinhoEstado === "pedido" && items.length > 0 && (
          <>
            <Itens>
              {items.map((item) => (
                <Item key={item.id}>
                  <Imagem src={item.foto} />
                  <div >
                    <h3>{item.nome}</h3>
                    <p>R$ {getPreco(item.preco)}</p>
                  </div>
                  <Remover onClick={() => removeItem(item.id)} src={Lixeira} />
                </Item>
              ))}
            </Itens>
            <DivTotal>
              <Total>Valor total</Total>
              <Total>R$ {getPreco(getTotalPrice())}</Total>
            </DivTotal>
            <Button onClick={() => setCarrinhoEstado("entrega")}>
              Continuar com a entrega
            </Button>
          </>
        )}
        {carrinhoEstado === "pedido" && items.length === 0 && (
          <>
            <OverlayCarrinho>
              <p>Adicione um item ao Carrinho para prosseguir com o pedido.</p>
              <img src={logo} alt="logo EFOOD" />
            </OverlayCarrinho>
          </>
        )}
        {carrinhoEstado === "entrega" && (
          <>
            <Entrega>
              <h3>Entrega</h3>
              <Input
                form={form}
                title="Quem irá receber"
                name="fullName"
                value={form.values.fullName}
              />
              <Input
                form={form}
                name="address"
                value={form.values.address}
                title="Endereço"
              />
              <Input
                form={form}
                name="city"
                value={form.values.city}
                title="Cidade"
              />
              <Input
                form={form}
                name="cep"
                value={form.values.cep}
                className="column-12"
                title="CEP"
              />
              <Input
                form={form}
                name="number"
                value={form.values.number}
                className="column-34"
                title="Número"
              />
              <Input
                form={form}
                name="complement"
                value={form.values.complement}
                title="Complemento (Opcional)"
              />
              <Botoes>
                <Button onClick={() => setCarrinhoEstado("pagamento")}>
                  Continuar com o pagamento
                </Button>
                <Button onClick={() => setCarrinhoEstado("pedido")}>
                  Voltar para o carrinho
                </Button>
              </Botoes>
            </Entrega>
          </>
        )}
        {carrinhoEstado === "pagamento" && !isSuccess ? (
          <>
            <Entrega>
              <h3>Pagamento - Valor a pagar R$ {getPreco(getTotalPrice())}</h3>
              <Input
                form={form}
                value={form.values.cardName}
                name="cardName"
                title="Nome no cartão"
              />
              <Input
                form={form}
                value={form.values.cardNumber}
                name="cardNumber"
                className="column-13"
                title="Número do Cartão"
              />
              <Input
                form={form}
                value={form.values.cardCode}
                name="cardCode"
                className="column-4"
                title="CVV"
              />
              <Input
                form={form}
                value={form.values.expiresMonth}
                name="expiresMonth"
                className="column-12"
                title="Mês de vencimento"
              />
              <Input
                form={form}
                value={form.values.expiresYear}
                name="expiresYear"
                className="column-34"
                title="Ano de vencimento"
              />
              <Botoes>
                <Button type="submit">
                  Finalizar pagamento
                </Button>
                <Button onClick={() => setCarrinhoEstado("entrega")}>
                  Voltar para edição de endereço
                </Button>
              </Botoes>
            </Entrega>
          </>
        ) : ''}
        {isSuccess && data ? (
          <>
            <Entrega>
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido. <br /><br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br /><br />Lembre-se da
                importância de higienizar as mãos após o recebimento do pedido,
                garantindo assim sua segurança e bem-estar durante a refeição. <br /><br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <Button onClick={compraConluida}>Concluir</Button>
            </Entrega>
          </>
        ) : ''}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
