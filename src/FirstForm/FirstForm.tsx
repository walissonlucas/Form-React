import styles from './FirstForm.module.css';
import { MdDownloadForOffline } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';

export function FirstForm() {
   return (
      <form className={styles.firstForm}>
         <legend className={styles.legend}>Dados da empresa</legend>  
         <div className={styles.box}>
            <h4 className={styles.title}>Logo</h4>
            <p> <strong>Obs:</strong> Não é obrigatório colocar o logo da sua empresa no orçamento, utilize essa ferramenta, apenas se você quiser colocar seu logo no orçamento, os formatos de imagem permitidos são: jpg, png e gif, e o tamanho máximo da foto permitido é de até 5MB.</p>
            <button className={styles.tip}>Dicas</button>
            <button className={styles.remove}>
               Remover Logo 
               <IoMdTrash size={16}/>            
            </button>
            <div className={styles.logo}>
               <a>
                  <MdDownloadForOffline size={35}/>
               </a>
            </div>
         </div>
         <div className={styles.forms}>

            <label>Nome
               <input type="text" id="name" placeholder='Digite o nome da pessoa ou empresa' />
            </label>
            

            <label>CPF/CNPJ
               <input type="text" id="cpf" placeholder='Digite o CPF/CNPJ da pessoa ou empresa'/>
            </label>
            

            <label>IE:
               <input type="text" id="ie" placeholder='Digite o número da IE'/>
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
               <input type="text" id='city' placeholder='Digite a cidade'/>
            </label>
         
            <label>Estado
               <input type="text" id='state' placeholder='Digite o estado'/>
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
         <div className={styles.model5}>   
            <label>Site
               <input type="text" id='site' placeholder='Digite seu site'/>
            </label>
         
            <label>E-mail
               <input type="text" id='email' placeholder='Digite seu e-mail'/>
            </label>
         </div>
      </form>
   );
}