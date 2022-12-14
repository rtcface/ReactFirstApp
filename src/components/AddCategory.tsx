import {useState} from 'react';

export interface AddCategory {
categoryName:string
}

export interface AddCategoryProps{
  onNewCategories: ( categoryName:string ) => void
}



export function AddCategory({ onNewCategories }:AddCategoryProps) {
try {
  const [inputValue, setInputValue] = useState<AddCategory["categoryName"]>('');

const onChangeCat = ({target}:React.ChangeEvent<HTMLInputElement>) => {
  setInputValue( target.value ); 
  //console.log('data', inputValue)
};

const onSubmitCat = ( event:React.FormEvent<HTMLFormElement> ) => {
  event.preventDefault();
  //console.log('input',inputValue);
  
  if( inputValue.trim().length <= 3 ) return;

   onNewCategories( inputValue.trim()  );

  setInputValue('');

};

  return (
      <form onSubmit={ onSubmitCat } aria-label="form">
        <input 
          type='text' 
          placeholder='Escribe la categoria'
          value={ inputValue }
          onChange={ onChangeCat  }
        />
      </form>
  );
} catch (error) {
  return (<><h3>Se presento un error</h3></>)
}
}
