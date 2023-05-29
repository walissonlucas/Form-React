import styles from './SecondForm.module.css'

export function SecondForm() {
   return (
      <form className={styles.secondForm}>
         <legend>
            Dados do cliente
         </legend>  
         <div className={styles.forms}>
            <label>Nome
               <input type="text" id="name" placeholder='Digite o nome da pessoa ou empresa'/>
            </label>

            <label>CPF/CNPJ
               <input type="text" id="cpf" placeholder='Digite o CPF/CNPJ da pessoa ou empresa'/>
            </label>

            <label>RG/IE:
               <input type="text" id="ie" placeholder='Digite o RG ou IE'/>
            </label>
         </div>
            <p className={styles.obs}>
            Obs: Digite seu CEP, que o gerador irá preencher automaticamente os campos de seu Endereço: (Rua, Bairro, Cidade, Estado)
            </p>           
         <div className={styles.model1}>   
            <label>Cep
               <input type="text" id='cep' placeholder='Digite o CEP'/>
            </label>
         
            <label>Endereço
               <input type="text" id='address' placeholder='Digite o endereço'/>
            </label>
         </div>
         <div className={styles.model2}>   
            <label>Número
               <input type="text" id='num' placeholder='Digite o n° do endereço'/>
            </label>
         
            <label>Complemento
               <input type="text" id='complement' placeholder='Digite o complemento'/>
            </label>

            <label>Bairro
               <input type="text" id='district' placeholder='Digite o bairro'/>
            </label>
         </div>
         <div className={styles.model3}>   
            <label>Cidade
               <input type="text" id='city'placeholder='Digite a cidade'/>
            </label>
         
            <label>Estado
               <input type="text" id='state' placeholder='Digite o estado'/>
            </label>

            <label>E-mail
               <input type="text" id='email' placeholder='Digite o e-mail'/>
            </label>
         </div>
         <div className={styles.model4}>   
            <label>Telefone
               <input type="text" id='tel' placeholder='Digite o telefone'/>
            </label>
         
            <label>Operadora
               <select id="opd">
                  <option value="" disabled selected>Selecione</option>
                  <option value="claro">Claro</option>
                  <option value="tim">Tim</option>
                  <option value="vivo">Vivo</option>
               </select>
            </label>

            <p className={styles.check}> WhatsApp
               <input type="checkbox" id="" />
            </p>
         </div>
         <div className={styles.model4}>   
            <label>Telefone
               <input type="text" id='tel' placeholder='Digite o telefone'/>
            </label>
         
            <label>Operadora
               <select id="opd">
                  <option value="" disabled selected>Selecione</option>
                  <option value="claro">Claro</option>
                  <option value="tim">Tim</option>
                  <option value="vivo">Vivo</option>
               </select>
            </label>

            <p className={styles.check}> WhatsApp
               <input type="checkbox" />
            </p>
         </div>
      </form>
   );
}