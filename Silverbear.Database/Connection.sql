CREATE TABLE [dbo].[Connection]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [ProductId] INT NOT NULL, 
    CONSTRAINT [FK_Products_ProductId] FOREIGN KEY (ProductId) REFERENCES Products(Id)
)
