import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-code-slash"
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
        </svg>{" "}
        with{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>{" "}
        by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          style={{
            color: "white",
            backgroundColor: "black",
            border: "2px solid black",
            borderRadius: "3px",
            textDecoration: "none"
          }}
          href="https://github.com/ShivCodeP"
          aria-label="My GitHub"
        >
          Shivam Pandey
        </a>{" "}
        using{" "}
        <img
          src="https://img.icons8.com/ios-filled/64/000000/react-native.png"
          width="20"
          alt="reacticon"
        />
        <p>
          <small className="text-muted">Feel free to reach out to me.</small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
