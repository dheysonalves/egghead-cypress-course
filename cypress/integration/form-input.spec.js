describe('Form Input', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('should focus the input on load', () => {
		cy.focused()
			.should('have.class', 'new-todo')
	})

	it('should run the visit on load, focus, type and verify value', () => {
		const typedText = 'New todo'
		cy.get('.new-todo')
			.type(typedText)
			.should('have.value', typedText)
	})
})
