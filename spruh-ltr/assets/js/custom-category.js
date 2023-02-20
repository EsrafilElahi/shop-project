const btnFT = document.querySelector('.ft-btn > button')
const btnFN = document.querySelector('.fn-btn > button')


btnFT.addEventListener("click", () => {
  cloneFT()
})

btnFN.addEventListener("click", () => {
  cloneFN()
})

const cloneFT = () => {

  const allBlock = document.querySelector('.all-block')

  const formBlock = document.createElement('div')
  formBlock.className = 'form-block mt-5 mt-md-3 card card-custom my-4';


  // ========== FT ==========
  const divFt = document.createElement('div')
  divFt.className = 'div-ft d-flex flex-column flex-md-row';



  const divFtAr = document.createElement('div')
  divFtAr.className = 'ft-ar form-group m-3 needs-validation was-validated';

  const divFtArLbl = document.createElement('label')
  divFtArLbl.innerHTML = "feature title : ar 2"

  const divFtArInp = document.createElement('input')
  divFtArInp.setAttribute("required", "")
  divFtArInp.className = 'form-control';

  divFtAr.appendChild(divFtArLbl)
  divFtAr.appendChild(divFtArInp)



  const divFtTr = document.createElement('div')
  divFtTr.className = 'ft-tr form-group m-3 needs-validation was-validated';

  const divFtTrLbl = document.createElement('label')
  divFtTrLbl.innerHTML = 'feature title : tr';

  const divFtTrInp = document.createElement('input')
  divFtTrInp.setAttribute("required", "")
  divFtTrInp.className = 'form-control';

  divFtTr.appendChild(divFtTrLbl)
  divFtTr.appendChild(divFtTrInp)


  const divFtS = document.createElement('div')
  divFtS.className = 'ft-s form-group m-3';

  const divFtSLbl = document.createElement('label')
  divFtSLbl.innerHTML = 'feature title type';

  const divFtSSelect = document.createElement('select')
  divFtSSelect.className = 'form-control rounded';

  const divFtSSelectOpt1 = document.createElement('option')
  divFtSSelectOpt1.innerHTML = '1';
  divFtSSelectOpt1.value = '1';

  const divFtSSelectOpt2 = document.createElement('option')
  divFtSSelectOpt2.innerHTML = '2';
  divFtSSelectOpt2.value = '2';

  divFtSSelect.appendChild(divFtSSelectOpt1)
  divFtSSelect.appendChild(divFtSSelectOpt2)
  divFtS.appendChild(divFtSLbl)
  divFtS.appendChild(divFtSSelect)


  const divFtBtn = document.createElement('div')
  divFtBtn.className = 'ft-btn d-flex justify-content-center align-items-end m-3';

  const divFtBtnBtn = document.createElement('button')
  divFtBtnBtn.innerHTML = '+';
  divFtBtnBtn.className = 'counter-plus btn btn-light';
  divFtBtnBtn.addEventListener("click", () => {
    cloneFT()
  })

  const divFtBtnRm = document.createElement('div')
  divFtBtnRm.className = 'ft-btn-rm d-flex justify-content-center align-items-end m-3';

  const divFtBtnBtnRm = document.createElement('button')
  divFtBtnBtnRm.innerHTML = '-';
  divFtBtnBtnRm.className = 'counter-plus btn btn-light';
  divFtBtnBtnRm.addEventListener("click", () => {
    formBlock.className = 'd-none'
  })

  divFtBtn.appendChild(divFtBtnBtn)
  divFtBtnRm.appendChild(divFtBtnBtnRm)


  // set divFt
  divFt.appendChild(divFtAr)
  divFt.appendChild(divFtTr)
  divFt.appendChild(divFtS)
  divFt.appendChild(divFtBtn)
  divFt.appendChild(divFtBtnRm)



  // ========== FN ==========
  const divFnBlock = document.createElement('div');
  divFnBlock.className = 'div-fn-block'

  const divFn = document.createElement('div')
  divFn.className = 'div-fn d-flex flex-column flex-md-row';



  const divFnAr = document.createElement('div')
  divFnAr.className = 'fn-ar form-group m-3 needs-validation was-validated';

  const divFnArLbl = document.createElement('label')
  divFnArLbl.innerHTML = 'feature name : ar';

  const divFnArInp = document.createElement('input')
  divFnArInp.setAttribute("required", "")
  divFnArInp.className = 'form-control';

  divFnAr.appendChild(divFnArLbl)
  divFnAr.appendChild(divFnArInp)


  const divFnTr = document.createElement('div')
  divFnTr.className = 'fn-tr form-group m-3 needs-validation was-validated';

  const divFnTrLbl = document.createElement('label')
  divFnTrLbl.innerHTML = 'feature name : tr';

  const divFnTrInp = document.createElement('input')
  divFnTrInp.setAttribute("required", "")
  divFnTrInp.className = 'form-control';

  divFnTr.appendChild(divFnTrLbl)
  divFnTr.appendChild(divFnTrInp)


  const divFnBtn = document.createElement('div')
  divFnBtn.className = 'fn-btn d-flex justify-content-center align-items-end m-3';

  const divFnBtnBtn = document.createElement('button')
  divFnBtnBtn.innerHTML = '+';
  divFnBtnBtn.className = 'counter-plus btn btn-light';
  divFnBtnBtn.addEventListener("click", () => {
    cloneFN()
  })

  divFnBtn.appendChild(divFnBtnBtn)


  // set divFn
  divFn.appendChild(divFnAr)
  divFn.appendChild(divFnTr)
  divFn.appendChild(divFnBtn)

  // set form block
  formBlock.appendChild(divFt)
  divFnBlock.appendChild(divFn)

  formBlock.appendChild(divFnBlock)

  // allBlock
  allBlock.appendChild(formBlock)

  console.log('form block :', formBlock)


}


const cloneFN = () => {

  const allBlock = document.querySelector('.all-block')

  const formBlock = document.createElement('div')
  formBlock.className = 'form-block ';


  // ========== FN ==========
  const divFnBlock = document.querySelector('.div-fn-block');

  const divFn = document.createElement('div')
  divFn.className = 'div-fn d-flex flex-column flex-md-row';



  const divFnAr = document.createElement('div')
  divFnAr.className = 'fn-ar form-group m-3 needs-validation was-validated';

  const divFnArLbl = document.createElement('label')
  divFnArLbl.innerHTML = 'feature name : ar';

  const divFnArInp = document.createElement('input')
  divFnArInp.setAttribute("required", "")
  divFnArInp.className = 'form-control';

  divFnAr.appendChild(divFnArLbl)
  divFnAr.appendChild(divFnArInp)


  const divFnTr = document.createElement('div')
  divFnTr.className = 'fn-tr form-group m-3 needs-validation was-validated';

  const divFnTrLbl = document.createElement('label')
  divFnTrLbl.innerHTML = 'feature name : tr';

  const divFnTrInp = document.createElement('input')
  divFnTrInp.setAttribute("required", "")
  divFnTrInp.className = 'form-control';

  divFnTr.appendChild(divFnTrLbl)
  divFnTr.appendChild(divFnTrInp)


  const divFnBtn = document.createElement('div')
  divFnBtn.className = 'fn-btn d-flex justify-content-center align-items-end m-3';

  const divFnBtnBtn = document.createElement('button')
  divFnBtnBtn.innerHTML = '+';
  divFnBtnBtn.className = 'counter-plus btn btn-light';
  divFnBtnBtn.addEventListener("click", () => {
    cloneFN()
  })

  const divFnBtnRm = document.createElement('div')
  divFnBtnRm.className = 'fn-btn d-flex justify-content-center align-items-end m-3';

  const divFnBtnBtnRm = document.createElement('button')
  divFnBtnBtnRm.innerHTML = '-';
  divFnBtnBtnRm.className = 'counter-plus btn btn-light';
  divFnBtnBtnRm.addEventListener("click", () => {
    divFn.className = 'd-none'
  })

  divFnBtn.appendChild(divFnBtnBtn)
  divFnBtnRm.appendChild(divFnBtnBtnRm)



  // set divFn
  divFn.appendChild(divFnAr)
  divFn.appendChild(divFnTr)
  divFn.appendChild(divFnBtn)
  divFn.appendChild(divFnBtnRm)

  // set form block
  divFnBlock.appendChild(divFn)

}