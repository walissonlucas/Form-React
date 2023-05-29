import styles from './ThirdForm.module.css'
import { IoMdTrash } from 'react-icons/io'

export function ThirdForm() {
   return (
     <>
      <form className={styles.thirdForm}>
         <legend className={styles.legend}>
            Dados do orçamento
         </legend>
         <div className={styles.model1}>   
            <label>N°
               <input type="text" id='n' placeholder='Digite o número'/>
            </label>
            <p className={styles.date}> Emitido em
               <input type="date" id="date" />
            </p>
            <p className={styles.check}>
               <input type="checkbox" id="unwr" />
               Em branco?
            </p>
            <p className={styles.date}> Válido até
               <input type="date" id="date" />
            </p>
            <p className={styles.check}>
               <input type="checkbox" id="unwr" />
               Em branco?
            </p>
         </div>
            <p className={styles.obs}>
               Obs: Digite seu CEP, que o gerador irá preencher automaticamente os    campos de seu Endereço: (Rua,  Bairro, Cidade, Estado)
            </p>  
            <label className={styles.input}> Forma de Pagamento
               <input type="text" id='pay' placeholder='Digite a forma de pagamento'/>
            </label>
         <div className={styles.model2}>   
            <label> Desconto
               <input type="text" id='reb' placeholder='Digite o valor'/>
            </label>
            <label> Motivo
               <input type="text" id='rea' placeholder='Digite o valor'/>
            </label>
         </div>
         <div className={styles.model3}>   
            <label> Acréscimo
               <input type="text" id='add' placeholder='Digite se houver'/>
            </label>
            <label> Motivo
               <input type="text" id='rea' placeholder='Digite o valor'/>
            </label>
         </div>
            <label className={styles.input}> Observações
               <input type="text" id='ob' placeholder='Digite as observações do orçamento'/>
            </label>
         
         <div className={styles.box}>
            <h4 className={styles.title}>Dados do Item 1: (Preenchimento Obrigatório)</h4>
            <p>
               <label>Produto/serviço
                  <input type="text" id="ps"   placeholder='Digite o produto ou serviço'/>
               </label>
            </p>
            <div>
               <label htmlFor="">Quantidade
                  <input type="text" id='amount' placeholder='Quantidade deste item'/>
               </label>
               <label htmlFor="">Valor
                  <input type="text" id='price' placeholder='Valor'/>
               </label>
            </div>
         </div>
         <div className={styles.btn}>
            <button>Adicionar item +</button>
            <p>Máximo de 15 itens</p>
         </div>
         <div className={styles.box2}>
            <button className={styles.btnGreen}>
               Gerar formulário
            </button>
            <button className={styles.btnRed}>
               Limpar dados do orçamento 
               <IoMdTrash size={15}/>
            </button>
         </div>
      </form>
         <footer className={styles.foot}></footer>
     </>
   );
}