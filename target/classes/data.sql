-- Use a known BCrypt hash for the password 'password'. The hash is: $2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6

-- Create Clients
INSERT INTO users (id, full_name, email, password, role, location, profile_image) VALUES
(1, 'Alice Client', 'alice@example.com', '$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6', 'CLIENT', 'Soweto', 'https://example.com/alice.jpg'),
(2, 'Bob Client', 'bob@example.com', '$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6', 'CLIENT', 'Khayelitsha', 'https://example.com/bob.jpg');

-- Create Worker
INSERT INTO users (id, full_name, email, password, role, location, profile_image) VALUES
(3, 'Charlie Worker', 'charlie@example.com', '$2a$10$slYQmyNdGzTn7ZLBXBChFOC9f6kFjAqPhccnP6DxlWXx2lPk1C3G6', 'WORKER', 'Umlazi', 'https://example.com/charlie.jpg');

-- Create Business owned by the Worker
INSERT INTO business (id, name, description, category, address, phone_number, image_url, rating, created_at, owner_id) VALUES
(1, 'Charlie''s Chesa Nyama', 'The best braai and shisanyama in town. Come for the food, stay for the vibe!', 'Food & Restaurant', '123 Main Road, Umlazi', '0821234567', 'https://example.com/chesanyama.jpg', 0.0, NOW(), 3);

-- Create a Review from a Client for the Business
INSERT INTO review (id, comment, rating, created_at, business_id, user_id) VALUES
(1, 'Absolutely amazing! The meat was tender and the atmosphere was electric. A must-visit.', 5, NOW(), 1, 1);
