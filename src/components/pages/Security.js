import React from 'react'

const Security = () => {
  return (
    <div>
        <h3>Security</h3>
        <h4>Password Settings</h4>
        <p>Make sure a strong password is used, this is to ensure maximum security of your data</p>
        <div>
            <form>
            <div><input type="text"/></div>
            <div><input type="text"/></div>
            <div><input type="text"/></div>
            </form>

            <div><button>Change Password</button></div>
        </div>
    </div>
  )
}

export default Security