import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ConfirmedOrderContainer } from "./styles";
import deliveryImg from "../../assets/Illustration.svg"

export function ConfirmedOrder() {

    const storedStateAsJSON = localStorage.getItem('@coffee-delivery:checkout-info-1.0.0')

    const checkoutInfo = storedStateAsJSON ? JSON.parse(storedStateAsJSON) : undefined;

    return(
        <ConfirmedOrderContainer>
            <header>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </header>
            <div>
                <ul>
                    <li>
                        <span><MapPin weight="fill" size={17} /></span>
                        <div>
                            <p>Entrega em <strong>{checkoutInfo.rua}, {checkoutInfo.numero} {checkoutInfo.complemento}</strong> </p>
                            <p>{checkoutInfo.bairro} - {checkoutInfo.cidade}, {checkoutInfo.uf}</p>
                        </div>
                    </li>
                    <li>
                        <span><Timer size={17} weight="fill" /></span>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min</strong></p>
                        </div>
                    </li>
                    <li>
                        <span><CurrencyDollar size={17} /></span>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>{checkoutInfo.payment}</strong></p>
                        </div>
                    </li>
                </ul>
                <aside>
                    <img src={deliveryImg} alt="" />
                </aside>
            </div>
        </ConfirmedOrderContainer>
    )
}
