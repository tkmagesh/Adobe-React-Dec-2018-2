import ProductsCollection from './ProductsCollection';


describe('Products Collection', () => {
	let productsCollection = null;

	beforeEach(() => {
		productsCollection = new ProductsCollection();
	});

	it('Should not have any products by default', () => {
		let expectedProductCount = 0;

		let actualProductCount = productsCollection.getCount();

		expect(actualProductCount).toBe(expectedProductCount);
	})

	it('Should add new product', () => {
		let newProductName = 'Pen';

		productsCollection.addNew(newProductName);

		let allProducts = productsCollection.getAll();

		expect(allProducts.indexOf(newProductName) >= 0).toBeTruthy();
		expect(productsCollection.getCount()).toBe(1);
	});
})