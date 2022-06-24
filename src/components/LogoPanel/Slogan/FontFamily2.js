import React from 'react'

const FontFamily = () => {
  return (
    <>
    <div class="form-group">
         <label class="gen-label">Font Family</label>
         <select name="" id="logo-title-font" class="gen-input">
             <option style={{fontfamily: 'Bebas Neue'}} value="">Bebas Neue</option>
             <option style={{fontfamily: 'Bungee Inline' }} value="">Bungee Inline</option>
             <option style={{fontfamily: 'Cinzel Decorative' }} value="">Cinzel Decorative</option>
             <option style={{fontfamily: 'Dancing Script' }} value="">Dancing Script</option>
             <option style={{fontfamily: 'Diplomata SC' }}  value="">Diplomata SC</option>
             <option style={{fontfamily: 'Limelight' }}  value="">Limelight</option>
             <option style={{fontfamily: 'Playfair Display' }}  value="">Playfair Display</option>
             <option style={{fontfamily: 'Poppins' }}  value="">Poppins</option>
             <option style={{fontfamily: 'Roboto' }}  value="">Roboto</option>
         </select>
     </div>

</>
  )
}

export default FontFamily