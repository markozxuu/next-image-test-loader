
const Layout = ({ children }) => {
    return (
        <div>
            {children}
      <style jsx>{`
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
	      align-items: center;
       `}</style>
        </div>
    )
}

export default Layout;