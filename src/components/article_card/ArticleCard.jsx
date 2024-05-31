import styled from 'styled-components';

const StyledCard = styled.div.attrs({ className: 'card' })`
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);  // Shadow for depth
  transition: transform 0.3s ease, box-shadow 0.3s ease;  // Smooth transitions for transform and shadow

  &:hover {
    transform: scale(1.05);        // Scales the card by 5% on hover
    box-shadow: 0 10px 20px rgba(0,0,0,0.2); // Increases shadow on hover
  }
`;

const ArticleCard = (props) => {

    return (
        <StyledCard>
            <img src="..." class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
        </StyledCard>
    );
};

export default ArticleCard