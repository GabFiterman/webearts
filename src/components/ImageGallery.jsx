import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImagePopup from "./ImagePopup";

const ImageGallery = (props) => {
  const { gallery, rootPath } = props;
  const sortByPriority = (a, b) => a.priority - b.priority;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const [currentPage, setCurrentPage] = useState(1);

  const [paginatedItems, setPaginatedItems] = useState([]);

  useEffect(() => {
    const sortedItems = gallery.sort(sortByPriority);

    const groupedItems = {};
    sortedItems.forEach((item) => {
      const priority = item.priority;
      if (!groupedItems[priority]) {
        groupedItems[priority] = [];
      }
      groupedItems[priority].push(item);
    });

    Object.values(groupedItems).forEach((group) => shuffleArray(group));

    // NOTE: Mesclar os grupos embaralhados para obter a lista final de itens aleatórios, mas respeitando a prioridade
    const shuffledItems = Object.values(groupedItems).flat();

    const paginatedGroups = paginateItems(shuffledItems, 18);
    setPaginatedItems(paginatedGroups);
  }, [gallery]);

  const paginateItems = (items, pageSize) => {
    const paginatedItems = [];
    for (let i = 0; i < items.length; i += pageSize) {
      paginatedItems.push(items.slice(i, i + pageSize));
    }
    return paginatedItems;
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, paginatedItems.length));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const PageController = () => {
    return (
      <Row className="align-items-center text-center my-4">
        <Col>
          <button onClick={prevPage} disabled={currentPage === 1}>
            &lt;
          </button>
        </Col>
        <Col>
          <span>
            {currentPage} de {paginatedItems.length}
          </span>
        </Col>
        <Col>
          <button
            onClick={nextPage}
            disabled={currentPage === paginatedItems.length}
          >
            &gt;
          </button>
        </Col>
      </Row>
    );
  };

  return (
    <Container>
      {paginatedItems.length > 0 && (
        <div className="ImageGallery align-items-center justify-content-center">
          <PageController />
          <Row className="align-items-center justify-content-center">
            {paginatedItems[currentPage - 1].map((item) => (
              <Col key={item.id} xs={6} lg={4} className="mb-4">
                <ImagePopup
                  imageUrl={`/img/portfolio/${rootPath}/${item.src}`}
                  imageAlt={item.company}
                />
              </Col>
            ))}
          </Row>
          <PageController />
        </div>
      )}
    </Container>
  );
};

export default ImageGallery;
